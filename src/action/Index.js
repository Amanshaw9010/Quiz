export const saveData = (data) => {
    return {
        type: "USER",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
