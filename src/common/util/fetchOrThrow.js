export default async (input, init = {}) => {
  // Add timeout support for slow connections (mobile data)
  const timeout = init.timeout ?? 30000; // 30 second default timeout
  let controller;
  let timeoutId;
  
  // Only create our own controller if user hasn't provided one
  if (!init.signal) {
    controller = new AbortController();
    timeoutId = setTimeout(() => controller.abort(), timeout);
  }

  try {
    const response = await fetch(input, {
      ...init,
      signal: init.signal ?? controller?.signal,
    });
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return response;
  } catch (error) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (error.name === 'AbortError' && !init.signal) {
      throw new Error('Request timeout - please check your connection');
    }
    throw error;
  }
};
