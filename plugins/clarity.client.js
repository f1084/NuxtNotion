// Microsoft Clarity 插件
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  // 只在客户端运行
  if (process.client) {
    const clarityProjectId = config.public.clarityProjectId
    
    if (clarityProjectId && clarityProjectId !== 'YOUR_CLARITY_PROJECT_ID') {
      // 初始化 Microsoft Clarity
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)
      })(window, document, "clarity", "script", clarityProjectId)
      
      console.log('Microsoft Clarity initialized with project ID:', clarityProjectId)
    } else {
      console.warn('Microsoft Clarity project ID not configured. Please set CLARITY_PROJECT_ID environment variable.')
    }
  }
})