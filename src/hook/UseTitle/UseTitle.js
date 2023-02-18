import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
    document.title = `${title}-jobend`;
  }, [title])
}

export default useTitle;