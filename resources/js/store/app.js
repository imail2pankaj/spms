import { createStore } from 'vuex';

export const store = new createStore({
    state() {
        return {
            showMobileMenu: false,
            user: {},
            currentTask: {},
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