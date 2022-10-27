import { ThreeDots } from  'react-loader-spinner'

function Loading() {
  return (
   <section className="loading-section">
      <ThreeDots 
         height="80" 
         width="80" 
         radius="9"
         color="#00bfff" 
         ariaLabel="three-dots-loading"
         wrapperStyle={{}}
         wrapperClassName=""
         visible={true}
      />
   </section>
  )
}

export default Loading