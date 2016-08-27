import {RouterConfig} from "@angular/router";
import {Dashboard} from "./dashboard/dashboard.component";
import {Pages} from "./pages.component";
import {Inventory} from "./inventory/inventory.component";
import {Item} from "./inventory/item/components/item.components";
import {ItemAdd} from "./inventory/item/components/add/item.add.components";
import {ItemInventory} from "./inventory/item/components/item-inventory/item.inventory.components";
import {GrnOrderCreate} from "./inventory/grn/components/grn-create/grn.order.create.components";
import {Supplier} from "./supplier/supplier.component";
import {SupplierView} from "./supplier/supplier/components/supplier.components";

//noinspection TypeScriptValidateTypes
export const PagesRoutes: RouterConfig = [
  {
    path: 'pages',
    component: Pages,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'inventory',
        component: Inventory,
        data: {
          menu: {
            title: 'Inventor',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Item',
              }
            }
            ,
            children: [
              {
                path: 'item',
                component: Item,
                data: {
                  menu: {
                    title: 'Summery'
                  }
                }
              },
              {
                path: 'item-add',
                component: ItemAdd,
                data: {
                  menu: {
                    title: 'Add'
                  }
                }
              },
              {
                path: 'item-inventory/:code',
                component: ItemInventory,
                data: {
                  menu: {
                    title: 'ItemInventory',
                    hidden: true
                  }
                }
              }
            ]
          }, {
            path: '',
            data: {
              menu: {
                title: 'GRN',
              }
            }
            ,
            children: [
              {
                path: 'add-grn',
                component: GrnOrderCreate,
                data: {
                  menu: {
                    title: 'GRN Order Create'
                  }
                }
              },

            ]
          }
        ]
      },
      {
        path: 'supplier',
        component: Supplier,
        data: {
          menu: {
            title: 'Supplier',
            icon: 'ion-items',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'supplier',
            component:SupplierView,
            data: {
              menu: {
                title: 'Supplier',
              }
            }

          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'External Link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
