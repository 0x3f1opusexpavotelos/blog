import { prisma } from "../prisma/db"




export const getPostComments = async (postId: string) => {
  return prisma.comments.findMany({ where: { postId: Number(postId) } })
}







