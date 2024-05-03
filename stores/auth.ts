export const useAuthStore = defineStore("authStore", {
    state: () => ({
        user: null,
    }),
    actions: {
        async setAuth(data: any) {
            this.user = data;
        },
    },
    persist: {
        storage: persistedState.localStorage,
    },
});


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
