export const unformattedStatuses = ['pendente', 'andamento', 'pronto'];

export const formattedMonths = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatDate = (date) => `${formattedMonths[date.getMonth()]} ${date.getDate()}, at ${date.getHours()}h${date.getMinutes()}`;

export const formatTaskForSorting = ({
  createdAt, updatedAt, ...rest
}) => ({
  createdAt: new Date(createdAt),
  updatedAt: new Date(updatedAt),
  ...rest,
});

export const formatTaskForDisplay = ({
  createdAt, updatedAt, ...rest
}) => ({
  createdAt: formatDate(createdAt),
  updatedAt: formatDate(updatedAt),
  ...rest,
});

export const sortTasks = (tasks, sortBy, ascendingOrder) => {
  if (unformattedStatuses.includes(sortBy)) {
    return tasks.sort((a, b) => {
      if (a.status === sortBy && b.status !== sortBy) {
        return -1;
      }

      if (a.status !== sortBy && b.status === sortBy) {
        return 1;
      }

      return 0;
    });
  }

  if (ascendingOrder) {
    return tasks.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }

      if (a[sortBy] > b[sortBy]) {
        return 1;
      }

      return 0;
    });
  }

  return tasks.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return 1;
    }

    if (a[sortBy] > b[sortBy]) {
      return -1;
    }

    return 0;
  });
};
