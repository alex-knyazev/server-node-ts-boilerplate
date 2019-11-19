/**
 * To map business error to API errors in controller
 */
export function wrapToControllerHandler<ArgsT, ResultT>(
  controller: (args: ArgsT) => Promise<ResultT>,
): (args: ArgsT) => Promise<ResultT> {
  return async function(args: ArgsT) {
    try {
      const result = await controller(args)
      return result
    } catch (error) {
      console.log('ERROR IN CONTROLLER')
      // map business error to API error here
      throw error
    }
  }
}
