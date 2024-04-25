export default defineAppConfig({
  ui: {
    textarea: {
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-white text-gray-900 dark:text-black ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-red-500 dark:focus:ring-primary-400',
        },
        gray: {
          outline: 'shadow-sm bg-white dark:bg-white text-gray-900 dark:text-black ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-red-500 dark:focus:ring-primary-400',
        },
      },
    },
    checkbox: {
      color: 'text-black dark:text-black',
      label: 'text-sm font-medium text-black dark:text-black',
    },
    pagination: {
      wrapper: 'flex items-center -space-x-px',
      base: '',
      rounded: 'first:rounded-s-md last:rounded-e-md',
      default: {
        size: 'sm',
        activeButton: {
          color: 'blue',
        },
        inactiveButton: {
          color: 'white',
        },
        firstButton: {
          color: 'primary',
          class: 'rtl:[&_span:first-child]:rotate-180',
          icon: 'i-heroicons-chevron-double-left-20-solid',
        },
        lastButton: {
          color: 'primary',
          class: 'rtl:[&_span:last-child]:rotate-180',
          icon: 'i-heroicons-chevron-double-right-20-solid',
        },
        prevButton: {
          color: 'primary',
          class: 'rtl:[&_span:first-child]:rotate-180',
          icon: 'i-heroicons-chevron-left-20-solid',
        },
        nextButton: {
          color: 'primary',
          class: 'rtl:[&_span:last-child]:rotate-180',
          icon: 'i-heroicons-chevron-right-20-solid',
        },
      },
    },
    table: {
      tr: {
        base: '',
        selected: 'bg-white dark:bg-white',
        active: 'hover:bg-white dark:hover:bg-white cursor-pointer',
      },
      th: {
        base: 'text-left rtl:text-right',
        padding: 'px-4 py-3.5',
        color: 'text-black dark:text-black',
        font: 'font-semibold',
        size: 'text-sm',
      },
      td: {
        base: 'whitespace-nowrap',
        padding: 'px-4 py-4',
        color: 'text-black dark:text-black',
        font: '',
        size: 'text-sm',
      },
      tbody: 'divide-y divide-black dark:divide-black',
      divide: 'divide-y divide-black dark:divide-black',
    },
    select: {
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-white text-gray-900 dark:text-black ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-red-500 dark:focus:ring-primary-400',
        },
        gray: {
          outline: 'shadow-sm bg-white dark:bg-white text-gray-900 dark:text-black ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-red-500 dark:focus:ring-primary-400',
        },
      },
    },
    button: {
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-white text-white dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-black focus:ring-2 focus:ring-red-500 dark:focus:ring-primary-400',
        },
        gray: {
          outline: 'shadow-sm bg-white dark:bg-white text-white dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-black focus:ring-2 focus:ring-red-500 dark:focus:ring-primary-400',
        },
        default: {
          size: 'sm',
          color: 'black',
          variant: 'outline',
        },
      },
    },
    input: {
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-white text-black dark:text-black ring-1 ring-inset ring-black dark:ring-black focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
        gray: {
          outline: 'shadow-sm bg-white dark:bg-white text-black dark:text-black ring-1 ring-inset ring-black dark:ring-black focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
      },
      placeholder: 'placeholder-black dark:placeholder-black',
      variant: {
        outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
        none: 'bg-transparent focus:ring-0 focus:shadow-none',
      },
    },
    modal: {
      background: 'bg-white dark:bg-white',
    },
    label: {
      wrapper: 'flex content-center items-center justify-between',
      base: 'block font-medium text-white dark:text-white',
      required: "after:content-['*'] after:ms-0.5 after:text-white dark:after:text-white",
    },
  },
});
