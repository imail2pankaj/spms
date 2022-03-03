import { adminRoles, allRoles } from './utils';

export default {
    routes: [{
            path: '/app/dashboard',
            component: () =>
                import ('./components/Dashboard.vue'),
            name: 'dashboard',
            meta: {
                title: 'Dashboard',
                primary: true,
                roles: allRoles()
            },
        },
        // Roles
        {
            path: '/app/roles',
            component: () =>
                import ('./components/role/RoleIndex'),
            name: 'role.index',
            meta: {
                title: 'Role',
                primary: false,
                profile: true,
                roles: ['super-admin', 'admin']
            },
        },
        {
            path: '/app/roles/create',
            component: () =>
                import ('./components/role/RoleCreate'),
            name: 'role.create',
            meta: {
                title: 'Role',
                primary: false,
                roles: ['super-admin', 'admin']
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
                primary: false,
                roles: ['super-admin', 'admin']
            },
        },

        //Users
        {
            path: '/app/users',
            component: () =>
                import ('./components/user/UserIndex'),
            name: 'user.index',
            meta: {
                title: 'User',
                primary: true,
                roles: ['super-admin', 'admin']
            },
            children: [{
                path: ':id/bank',
                props: true,
                component: () =>
                    import ('./components/user/BankEdit'),
                name: "user.bank"
            }, ]
        },
        {
            path: '/app/users/create',
            component: () =>
                import ('./components/user/UserCreate'),
            name: 'user.create',
            meta: {
                title: 'User',
                primary: false,
                roles: ['super-admin', 'admin']
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
                primary: false,
                roles: ['super-admin', 'admin']
            },
        },
        // Service Tickets
        {
            path: '/app/service-tickets',
            component: () =>
                import ('./components/service-ticket/ServiceTicketIndex'),
            name: 'service-ticket.index',
            meta: {
                title: 'Service Tickets',
                primary: false,
                profile: true,
                roles: ['super-admin', 'admin', 'developer']
            },
        },
        {
            path: '/app/service-tickets/create',
            component: () =>
                import ('./components/service-ticket/ServiceTicketCreate'),
            name: 'service-ticket.create',
            meta: {
                title: 'Service Tickets',
                primary: false,
                roles: ['super-admin', 'admin', 'developer']
            },
        },
        {
            path: '/app/service-tickets/:id/edit',
            component: () =>
                import ('./components/service-ticket/ServiceTicketEdit'),
            name: 'service-ticket.edit',
            props: true,
            meta: {
                title: 'Service Tickets',
                primary: false,
                roles: ['super-admin', 'admin', 'developer']
            },
        },

        // Holidays
        {
            path: '/app/holidays',
            component: () =>
                import ('./components/holiday/HolidayIndex'),
            name: 'holiday.index',
            meta: {
                title: 'Holidays',
                primary: false,
                profile: true,
                roles: ['super-admin', 'admin']
            },
        },
        {
            path: '/app/holidays/create',
            component: () =>
                import ('./components/holiday/HolidayCreate'),
            name: 'holiday.create',
            meta: {
                title: 'Holiday Create',
                primary: false,
                roles: ['super-admin', 'admin']
            },
        },
        {
            path: '/app/holidays/:id/edit',
            component: () =>
                import ('./components/holiday/HolidayEdit'),
            name: 'holiday.edit',
            props: true,
            meta: {
                title: 'Holiday Edit',
                primary: false,
                roles: ['super-admin', 'admin']
            },
        },

        // Leaves
        {
            path: '/app/leaves',
            component: () =>
                import ('./components/leave/LeaveIndex'),
            name: 'leave.index',
            meta: {
                title: 'Leaves',
                primary: false,
                profile: true,
                roles: allRoles()
            },
        },
        {
            path: '/app/leaves/create',
            component: () =>
                import ('./components/leave/LeaveCreate'),
            name: 'leave.create',
            meta: {
                title: 'Leave Create',
                primary: false,
                roles: allRoles()
            },
        },
        {
            path: '/app/leaves/:id/edit',
            component: () =>
                import ('./components/leave/LeaveEdit'),
            name: 'leave.edit',
            props: true,
            meta: {
                title: 'Leave Edit',
                primary: false,
                roles: allRoles()
            },
        },
        // Projects
        {
            path: '/app/projects',
            component: () =>
                import ('./components/project/ProjectIndex'),
            name: 'project.index',
            meta: {
                title: 'Project',
                primary: true,
                roles: ['super-admin', 'admin', 'bde']
            },
        },
        {
            path: '/app/projects/create',
            component: () =>
                import ('./components/project/ProjectCreate'),
            name: 'project.create',
            meta: {
                title: 'Project',
                primary: false,
                roles: ['super-admin', 'admin', 'bde']
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
                primary: false,
                roles: ['super-admin', 'admin', 'bde']
            },
        },
        {
            path: '/app/projects/:slug',
            component: () =>
                import ('./components/project/ProjectDetails'),
            name: 'project.details',
            props: true,
            meta: {
                title: 'Project',
                primary: false,
                roles: ['super-admin', 'admin', 'pm', 'bde', 'developer', 'designer', 'qa', 'customer'],
            },
            children: [{
                    path: 'task',
                    component: () =>
                        import ('./components/project/project-details/ProjectTask'),
                    name: "project.task",
                    children: [{
                        path: ":id/task",
                        component: () =>
                            import ('./components/project/project-details/TaskEdit'),
                        props: true,
                        name: 'project.task.edit',
                        roles: ['super-admin', 'admin', 'pm', 'bde', 'developer', 'designer', 'qa', 'customer']
                    }]
                },
                {
                    path: 'update',
                    component: () =>
                        import ('./components/project/project-details/ProjectUpdate'),
                    name: "project.update",
                    roles: ['super-admin', 'admin', 'pm', 'bde', 'developer', 'designer', 'qa', 'customer']
                },
                {
                    path: 'milestones',
                    component: () =>
                        import ('./components/project/project-details/ProjectMilestone'),
                    name: "project.milestone",
                    roles: ['super-admin', 'admin', 'pm', 'bde', 'developer', 'designer', 'qa', 'customer']
                },
                {
                    path: 'attachments',
                    component: () =>
                        import ('./components/project/project-details/ProjectAttachment'),
                    name: "project.attachment",
                    roles: ['super-admin', 'admin', 'pm', 'bde', 'developer', 'designer', 'qa', 'customer']
                },
                {
                    path: 'notes',
                    component: () =>
                        import ('./components/project/project-details/ProjectNote'),
                    name: "project.note",
                    roles: ['super-admin', 'admin', 'pm', 'bde', 'developer', 'designer', 'qa', 'customer']
                }
            ]
        },
        {
            path: '/app/user-profile',
            component: () =>
                import ('./user/components/UserProfile.vue'),
            name: 'user-profile',
            meta: {
                title: 'User Profile',
                primary: false
            },
        },
    ],
};