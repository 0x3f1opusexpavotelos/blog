import { prisma } from "../prisma/db"

export const getPostReactions = async (postId: string) => {
  return prisma.comments.findMany({ where: { postId: Number(postId) } })
}








// getReactionDetailsByPost
export const getPostReaction = async (postId: number) => {
  const reactions = await prisma.reactions.groupBy({
    by: ['type'],
    where: { postId },
    _count: {
      type: true,
    },
  });


};
