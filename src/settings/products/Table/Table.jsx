/** @jsx jsx */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import RcTable from "rc-table";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./products.actionCreators";
import TotalItemsSelected from "./ItemsSelected";
import Pagination from "../../../app/common/Pagination";
import { UncontrolledTooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Table.styles";
import "rc-table/dist/rc-table.min.css";

class Table extends Component {
  state = {
    data: [],
    selected: [],
    allSelected: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired,
    productActions: PropTypes.object.isRequired
  };

  componentDidMount() {
    const account = this.props.auth.user.accounts[0];
    this.props.productActions.getProducts(account.id);
    this.setState({
      accountId: account.id
    });
  }

  componentDidUpdate(prevProps) {
    const { products } = this.props.products;
    const prevProducts = prevProps.products.products;
    if (products !== prevProducts) {
      this.setState({
        data: products
      });
    }
  }

  handleChange = (event, index) => {
    event.currentTarget.parentNode.parentNode.parentNode.classList.toggle(
      "selected"
    );

    const data = [...this.state.data];
    data[index]["selected"] = !data[index]["selected"];

    this.setState(
      {
        data: [
          ...this.state.data.slice(0, index),
          data[index],
          ...this.state.data.slice(index + 1)
        ]
      },
      this.selectProduct(data[index])
    );
  };

  selectProduct = obj => {
    let data = [...this.state.selected];
    const exist = data.findIndex(item => item.id === obj.id);

    this.setState(prevState => {
      let allSelected = false;
      // if product is in the selected array, filter the product out
      // otherwise, add the product to the selected array
      if (exist >= 0) {
        data = prevState.selected.filter(item => item.id !== obj.id);
      } else {
        data = data.concat(obj);
      }

      if (data.length === prevState.data.length) {
        allSelected = true;
      }

      if (data.length > 0 && data.length < prevState.data.length) {
        this.mainCheck.indeterminate = true;
      } else {
        this.mainCheck.indeterminate = false;
      }

      return {
        selected: data,
        allSelected
      };
    });
  };

  toggleProductSelection = () => {
    const { allSelected } = this.state;

    if (allSelected) {
      this.deselectAllProducts();
    } else {
      this.selectAllProducts();
    }
  };

  selectAllProducts = () => {
    const newArr = this.state.data.map(obj => {
      obj.selected = true;
      return obj;
    });

    this.setState(
      {
        data: newArr,
        selected: newArr,
        allSelected: true
      },
      this.selectAllRows()
    );
  };

  selectAllRows = () => {
    const tr = document.querySelectorAll(".rc-table-body .rc-table-row");
    for (let node of tr.values()) {
      node.classList.add("selected");
    }
  };

  deselectAllProducts = () => {
    const newArr = this.state.data.map(obj => {
      obj.selected = false;
      return obj;
    });

    this.mainCheck.indeterminate = false;

    this.setState(
      {
        data: newArr,
        selected: [],
        allSelected: false
      },
      this.deselectAllRows()
    );
  };

  deselectAllRows = () => {
    const tr = document.querySelectorAll(".rc-table-body .rc-table-row");
    for (let node of tr.values()) {
      node.classList.remove("selected");
    }
  };

  renderAction = (o, row, index) => {
    return (
      <div className="flex center">
        <input
          type="checkbox"
          checked={row.selected}
          onChange={e => this.handleChange(e, index)}
        />
      </div>
    );
  };

  nextPage = () => {
    const { currentPage } = this.props.products.pagination;
    const nextPage = currentPage + 1;
    this.props.productActions
      .nextPage(this.state.accountId, nextPage)
      .then(() => {
        this.deselectAllProducts();
      });
  };

  previousPage = () => {
    const { currentPage } = this.props.products.pagination;
    const nextPage = currentPage - 1;
    this.props.productActions
      .previousPage(this.state.accountId, nextPage)
      .then(() => {
        this.deselectAllProducts();
      });
  };

  render() {
    const columns = [
      {
        title: "",
        key: "selected",
        render: this.renderAction,
        width: 60
      },
      {
        title: "Product Name",
        key: "name",
        dataIndex: "name",
        render: productName => {
          return (
            <div>
              <Avatar name={productName} round={true} size="38" />
              <span>{productName}</span>
            </div>
          );
        }
      },
      {
        title: "SKU #",
        key: "sku",
        dataIndex: "sku"
      },
      {
        title: "Category",
        key: "category",
        dataIndex: "category"
      },
      {
        title: "Price",
        key: "price",
        dataIndex: "price"
      },
      {
        title: "Workflow",
        key: "workflow",
        dataIndex: "workflow",
        render: text => (
          <a href="" className="link">
            {text}
          </a>
        )
      },
      {
        title: "",
        key: "id",
        render: row => {
          return (
            <div className="more">
              <i className="icon" id={`edit-${row.id}`}>
                <FontAwesomeIcon icon="pencil-alt" />
              </i>
              <i className="icon" id={`delete-${row.id}`}>
                <FontAwesomeIcon icon="trash-alt" />
              </i>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target={`edit-${row.id}`}
              >
                Edit
              </UncontrolledTooltip>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target={`delete-${row.id}`}
              >
                Delete
              </UncontrolledTooltip>
            </div>
          );
        }
      }
    ];
    const totalItems = this.state.selected;
    const { pagination } = this.props.products;

    return (
      <div className="table-wrapper">
        <div className="selection">
          <div css={styles.productsSelectedSection}>
            <div>
              <input
                type="checkbox"
                ref={el => (this.mainCheck = el)}
                checked={this.state.allSelected}
                onChange={this.toggleProductSelection}
              />
              <TotalItemsSelected count={totalItems.length} />
            </div>
            <Pagination
              from={pagination.from}
              to={pagination.to}
              total={pagination.total}
              currentPage={pagination.currentPage}
              lastPage={pagination.lastPage}
              onNextPage={this.nextPage}
              onPreviousPage={this.previousPage}
            />
          </div>
        </div>
        <RcTable data={this.state.data} columns={columns} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
