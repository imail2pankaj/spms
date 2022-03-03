import { createStore } from 'vuex';

export const store = new createStore({
    state() {
        var ts = (Date.parse(new Date()) / 1000);
        return {
            showMobileMenu: false,
            user: { active_projects: [], hold_projects: [], non_projects: [], internal_projects: [] },
            currentTask: { id: 0, project_id: 0, user_id: 0, title: null, total_time: 0, task_status: '', time: ts },
        };
    },

    mutations: {
        setShowMoblieMenu(state, showMobileMenu) {
            state.showMobileMenu = showMobileMenu;
        },
        setUser(state, user) {
            state.user = user;
        },
        setCurrentTask(state, currentTask) {
            state.currentTask = currentTask;
        }
    },

    getters: {
        showMobileMenu: state => state.showMobileMenu,
        user: state => state.user,
        currentTask: state => state.currentTask,
    },
});