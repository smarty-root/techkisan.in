
module.exports.fetchLoginUser = async (token) => {
    try {
        const response = await fetch(Endpoints.LOGIN_USER_FETCH, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        });
        if (response.status === 200) {
        const data = await response.json();
        return data;
        } else {
        throw new Error("Failed to fetch user data");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}