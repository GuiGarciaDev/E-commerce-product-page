import { useState } from "react";

export function useSideBar() {
    const [sidebar, setSideBar] = useState<boolean>(false);
    const open = () => setSideBar(true)
    const close = () => setSideBar(false)

    return { sidebar, open, close }
}