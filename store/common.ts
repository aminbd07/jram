const delay = (t: number) => new Promise((r) => setTimeout(r, t))

export const useCommonstore = defineStore('commonstore', {
    state: () => {
        return {
            loading: false,
        }
    },
    actions: {
        actLoading(act: boolean = true) {
            let la = this.loading ? false : true
            this.loading = la
        },
    },
    getters: {
        isLoading: state => state.loading,
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCommonstore, import.meta.hot))
  }
  