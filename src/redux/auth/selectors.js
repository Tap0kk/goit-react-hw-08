export const selectUserData = state => state.auth.user;
export const selectUserDataToken = state => state.auth.token;
export const selectUserDataIsLoading = state => state.auth.loading;
export const selectUserDataIsError = state => state.auth.error;
export const selectUserDataIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserDataisRefreshing = state => state.auth.isRefreshing;
