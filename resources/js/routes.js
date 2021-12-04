import AnotherComponent from './components/AnotherComponent.vue';
import Dashboard from './components/Dashboard.vue';
import Product from './components/product/ProductIndex.vue';
import UserProfile from './user/components/UserProfile.vue';

export default {
    routes: [{
            path: '/app/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                title: 'Dashboard',
                primary: true
            },
        },
        {
            path: '/app/another-component',
            component: AnotherComponent,
            name: 'another-component',
            meta: {
                title: 'Another Component',
                primary: true
            },
        },
        {
            path: '/app/roles',
            component: () =>
                import ('./components/role/RoleIndex'),
            name: 'role.index',
            meta: {
                title: 'Role',
                primary: true
            },
        },
        {
            path: '/app/roles/create',
            component: () =>
                import ('./components/role/RoleCreate'),
            name: 'role.create',
            meta: {
                title: 'Role',
                primary: false
            },
        },
        {
            path: '/app/roles/:id/edit',
            component: () =>
                import ('./components/role/RoleEdit'),
            name: 'role.edit',
            props: true,
            meta: {
                title: 'Role',
                primary: false
            },
        },
        {
            path: '/app/users',
            component: () =>
                import ('./components/user/UserIndex'),
            name: 'user.index',
            meta: {
                title: 'User',
                primary: true
            },
        },
        {
            path: '/app/users/create',
            component: () =>
                import ('./components/user/UserCreate'),
            name: 'user.create',
            meta: {
                title: 'User',
                primary: false
            },
        },
        {
            path: '/app/users/:id/edit',
            component: () =>
                import ('./components/user/UserEdit'),
            name: 'user.edit',
            props: true,
            meta: {
                title: 'User',
                primary: false
            },
        },

        {
            path: '/app/projects',
            component: () =>
                import ('./components/project/ProjectIndex'),
            name: 'project.index',
            meta: {
                title: 'Project',
                primary: true
            },
        },
        {
            path: '/app/projects/create',
            component: () =>
                import ('./components/project/ProjectCreate'),
            name: 'project.create',
            meta: {
                title: 'Project',
                primary: false
            },
        },
        {
            path: '/app/projects/:id/edit',
            component: () =>
                import ('./components/project/ProjectEdit'),
            name: 'project.edit',
            props: true,
            meta: {
                title: 'Project',
                primary: false
            },
        },

        {
            path: '/app/categories',
            component: () =>
                import ('./components/category/CategoryIndex'),
            name: 'category.index',
            meta: {
                title: 'Category',
                primary: true
            },
        },
        {
            path: '/app/categories/create',
            component: () =>
                import ('./components/category/CategoryCreate'),
            name: 'category.create',
            meta: {
                title: 'Category Create',
                primary: false
            },
        },
        {
            path: '/app/categories/:id/edit',
            component: () =>
                import ('./components/category/CategoryEdit'),
            name: 'category.edit',
            props: true,
            meta: {
                title: 'Category Edit',
                primary: false
            },
        },
        {
            path: '/app/products',
            component: Product,
            name: 'product.index',
            meta: {
                title: 'Products',
                primary: true
            },
        },
        {
            path: '/app/products/create',
            component: () =>
                import ('./components/product/ProductCreate'),
            name: 'product.create',
            meta: {
                title: 'Product Create',
                primary: false
            },
        },
        {
            path: '/app/products/:id/edit',
            component: () =>
                import ('./components/product/ProductEdit'),
            name: 'product.edit',
            props: true,
            meta: {
                title: 'Product Edit',
                primary: false
            },
        },
        {
            path: '/app/company',
            component: () =>
                import ('./components/company/CompanyIndex'),
            name: 'company',
            meta: {
                title: 'Company',
                primary: true
            },
        },
        {
            path: '/app/company/create',
            component: () =>
                import ('./components/company/CompanyCreate'),
            name: 'company.create',
            meta: {
                title: 'Company',
                primary: false
            },
        },
        {
            path: '/app/company/:id/edit',
            component: () =>
                import ('./components/company/CompanyEdit'),
            name: 'company.edit',
            props: true,
            meta: {
                title: 'Company',
                primary: false
            },
        },
        {
            path: '/app/user-profile',
            component: UserProfile,
            name: 'user-profile',
            meta: {
                title: 'User Profile',
                primary: false
            },
        },
    ],
};