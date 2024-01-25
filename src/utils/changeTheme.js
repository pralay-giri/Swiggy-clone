const changeTheme = (mode) => {
    if (mode === "system")
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            window.document.documentElement.classList.add("dark");
        } else {
            window.document.documentElement.classList.remove("dark");
        }
    else if (mode === "dark") {
        window.document.documentElement.classList.add("dark");
    } else {
        window.document.documentElement.classList.remove("dark");
    }
};

export default changeTheme;
