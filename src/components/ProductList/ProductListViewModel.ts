import { observable, action, computed, makeAutoObservable, makeObservable } from "mobx";

import { ProductType } from "src/types/product.type";

class ProductListViewModel {
  @observable private productList: ProductType[] = [];
  @observable private productName: string = "";

  constructor() {
    // makeAutoObservable(this);
    makeObservable(this);
  }

  @action overwriteProductList(products: ProductType[]) {
    this.productList = [...products];
  }

  @action addProduct() {
    const newProduct: ProductType = {
      id: Date.now().toString(),
      name: this.productName,
      quantity: 1
    };

    this.productList.push(newProduct);
    this.changeProductName("");
  }

  @action getProductByID(id: string): ProductType | undefined {
    return this.productList.find(p => p.id === id);
  }

  @action changeProductName(value: string) {
    this.productName = value;
  }

  @computed get getProductList(): ProductType[] {
    return this.productList.slice();
  }

  @computed get getProductName(): string {
    return this.productName;
  }

}

export default ProductListViewModel;