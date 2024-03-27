import { useNavigate } from "react-router-dom"

// router navigate hook
function useRouterNavigate() {
    const navigateFn = useNavigate()
    function navigate(url: string) {
        navigateFn(url)
    }

    return navigate
}

export default useRouterNavigate