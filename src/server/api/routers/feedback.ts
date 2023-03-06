import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const feedbackRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.feedback.findMany();
  }),
  addFeedback: publicProcedure.input(z.object({
    title: z.string(),
    category: z.string(),
    detail: z.string()
  })).mutation(({input, ctx}) => {
    return ctx.prisma.feedback.create({
      data: {
        title: input.title,
        category: input.category,
        description: input.detail,
        upvotes: 0,
        status: 'suggestion',
        comments: []
      }
    })
  })
});
