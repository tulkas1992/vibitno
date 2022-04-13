import {
  IS_FETCHING_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SET_PRODUCTS_PAGINATION
} from "./products.actions";
import * as service from "./products.service";

function buildPaginationObject(page) {
  const pagination = {
    from: page.from,
    to: page.to,
    total: page.total,
    currentPage: page.current_page,
    lastPage: page.last_page
  };

  return pagination;
}

function setPagination(pagination) {
  return {
    type: SET_PRODUCTS_PAGINATION,
    payload: pagination
  };
}

function setProducts(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
}

function getAlteredProducts(products) {
  const newArr = products.map(product => {
    product["selected"] = false;
    product["key"] = product.id;
    product["workflow"] = "Test workflow";
    product["category"] = "Test category";
    product["sku"] = "12345678";
    product["price"] = "1000";
    return product;
  });
  return newArr;
}

export function getProducts(accountId) {
  return dispatch => {
    service
      .getProducts(accountId)
      .then(async response => {
        const { data } = response;
        const products = data.data;
        const pagination = buildPaginationObject(data);
        const newProducts = await getAlteredProducts(products);

        dispatch(setProducts(newProducts));
        dispatch(setPagination(pagination));
      })
      .catch(err => console.log(err.response));
  };
}

export function nextPage(accountId, page) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      service
        .nextPage(accountId, page)
        .then(async response => {
          const { data } = response;
          const products = data.data;
          const pagination = buildPaginationObject(data);
          const newProducts = await getAlteredProducts(products);

          dispatch(setPagination(pagination));
          dispatch(setProducts(newProducts));
          resolve();
        })
        .catch(err => {
          console.log(err.response);
          reject();
        });
    });
  };
}

export function previousPage(accountId, page) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      service
        .previousPage(accountId, page)
        .then(async response => {
          const { data } = response;
          const products = data.data;
          const pagination = buildPaginationObject(data);
          const newProducts = await getAlteredProducts(products);

          dispatch(setPagination(pagination));
          dispatch(setProducts(newProducts));
          resolve();
        })
        .catch(err => {
          console.log(err.response);
          reject();
        });
    });
  };
}
