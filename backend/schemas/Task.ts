import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";

export const Task = list({
  // access:
  // ui
  fields: {
    title: text({ validation: { isRequired: true } }),
    description: text(),
    // TODO, add dueDate
  },
});
