

type PageContainerProps = {
    children: React.ReactNode
}

const PageContainer = ({children}:PageContainerProps) => {
    return (
        <div className="page-container">
        {children}
        </div>
    )
}

export default PageContainer