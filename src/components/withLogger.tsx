import { useEffect, type ComponentType } from 'react'

export function withLogger<P extends object>(WrappedComponent: ComponentType<P>, componentName: string) {
  return function LoggedComponent(props: P) {
    useEffect(() => {
      console.log(`[HOC Log] ${componentName} mounted.`)
    }, [])

    return <WrappedComponent {...props} />
  }
}
export default withLogger
