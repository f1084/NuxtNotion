// Microsoft Clarity Composable
export const useClarity = () => {
  // 检查 Clarity 是否已加载
  const isClarityLoaded = () => {
    return process.client && typeof window !== 'undefined' && window.clarity
  }

  // 发送自定义事件
  const trackEvent = (eventName, eventData = {}) => {
    if (isClarityLoaded()) {
      try {
        window.clarity('event', eventName, eventData)
        console.log('Clarity event tracked:', eventName, eventData)
      } catch (error) {
        console.error('Error tracking Clarity event:', error)
      }
    } else {
      console.warn('Clarity not loaded, event not tracked:', eventName)
    }
  }

  // 设置用户标识
  const identify = (userId, sessionData = {}) => {
    if (isClarityLoaded()) {
      try {
        window.clarity('identify', userId, sessionData)
        console.log('Clarity user identified:', userId)
      } catch (error) {
        console.error('Error identifying user in Clarity:', error)
      }
    } else {
      console.warn('Clarity not loaded, user not identified:', userId)
    }
  }

  // 设置自定义标签
  const setTag = (key, value) => {
    if (isClarityLoaded()) {
      try {
        window.clarity('set', key, value)
        console.log('Clarity tag set:', key, value)
      } catch (error) {
        console.error('Error setting Clarity tag:', error)
      }
    } else {
      console.warn('Clarity not loaded, tag not set:', key, value)
    }
  }

  // 获取会话 URL
  const getSessionUrl = () => {
    if (isClarityLoaded()) {
      try {
        return window.clarity('getSessionUrl')
      } catch (error) {
        console.error('Error getting Clarity session URL:', error)
        return null
      }
    }
    return null
  }

  return {
    isClarityLoaded,
    trackEvent,
    identify,
    setTag,
    getSessionUrl
  }
}