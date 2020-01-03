const handlers = {
  error(err) {
    if ('request' in err) {
      return err.request
    }
    if ('response' in err) {
      return err.response
    }
    return err
  }
}

export default handlers
