import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const feedbackRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.feedback.findMany();
  }),
});
