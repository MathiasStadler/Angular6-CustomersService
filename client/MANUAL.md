
# Angular6-CustomersService

```bash
ng new Angular6-CustomersService
cd Angular6-CustomersService

# install rxjs
npm install rxjs

ng generate module app-routing --flat --module=app
ng generate module core
## generate core services
ng g service core/data --module=core
ng g service core/data-filter --module=core


ng generate component customers
ng g c customers/customers-edit --flat
ng g c customers/customers-grid --flat
ng g c customers/customer-edit-reactive --flat
ng generate module shared
ng g i shared/interfaces --flat
ng g i shared/property-resolver --flat

ng g c shared/filter-textbox
ng g c shared/pagination
```
