import { CrewApi } from '@/api'

interface Order {
  userId: string
  projectId: string
  titleProject: string
  unitePrice: number
  currencyId: string
  quantityNumber: number
}

export const createOrder = async (order: Order): Promise<void> => {
  try {
    const { data } = await CrewApi.post('/paymentRoute/create-order', {
      userId: order.userId,
      projectId: order.projectId,
      titleProject: order.titleProject,
      unitePrice: order.unitePrice,
      currencyId: order.currencyId,
      quantityNumber: order.quantityNumber,
    })

    window.location.replace(data.init_point)
  } catch (error) {
    console.log(error)
  }
}
