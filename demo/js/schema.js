const blockCommonAttrs = { id: null, blockId: null }
const blockInteractiveComponents = [
  'Button',
  'button',
  'Select',
  'select',
  'ExternalSelect',
  'UsersSelect',
  'ConversationsSelect',
  'ChannelsSelect',
  'Overflow',
  'DatePicker',
  'TimePicker',
  'DateTimePicker',
  'RadioButtonGroup',
  'CheckboxGroup',
]
const blockInteractiveCommonAttrs = {
  name: null,
  actionId: null,
  confirm: null,
}
const multipleSelectAttrs = {
  multiple: [],
  maxSelectedItems: null,
}
const videoCommonAttrs = {
  titleUrl: null,
  authorName: null,
  providerName: null,
  providerIconUrl: null,
  description: null,
}
const videoIntrinsicAttrs = {
  src: null,
  alt: null,
  title: null,
  poster: null,
  id: null,
  ...videoCommonAttrs,
}
const videoComponentAttrs = {
  src: null,
  videoUrl: null,
  alt: null,
  title: null,
  poster: null,
  thumbnailUrl: null,
  id: null,
  blockId: null,
  ...videoCommonAttrs,
}
const inputIntrinsicAttrs = {
  label: null,
  title: null,
  id: null,
  required: [],
  dispatchAction: [],
}
const inputComponentAttrs = {
  ...inputIntrinsicAttrs,
  hint: null,
  blockId: null,
}
const markupHTML = [
  'Escape',
  'a',
  'b',
  'blockquote',
  'br',
  'code',
  'del',
  'em',
  'i',
  'li',
  'ol',
  'p',
  'pre',
  's',
  'strike',
  'strong',
  'time',
  'ul',
]

const commonKnownBlocks = [
  'Section',
  'section',
  'Divider',
  'hr',
  'Image',
  'img',
  'Actions',
  'Context',
  'Header',
  'header',
  'Video',
  'video',

  // Input blocks
  'Input',
  'input',
  'Textarea',
  'textarea',
  'Select',
  'select',
  'ExternalSelect',
  'UsersSelect',
  'ConversationsSelect',
  'ChannelsSelect',
  'DatePicker',
  'TimePicker',
  'DateTimePicker',
  'RadioButtonGroup',
  'CheckboxGroup',
]

const schema = {
  '!top': ['Blocks', 'Modal', 'Home'],

  // Container components
  Blocks: {
    attrs: {},
    children: [...commonKnownBlocks, 'File', 'Call'],
  },

  Modal: {
    attrs: {
      title: null,
      type: ['modal', 'workflow_step'],
      close: null,
      submit: null,
      privateMetadata: null,
      clearOnClose: [],
      notifyOnClose: [],
      callbackId: null,
      externalId: null,
    },
    children: commonKnownBlocks,
  },

  Home: {
    attrs: {
      privateMetadata: null,
      callbackId: null,
      externalId: null,
    },
    children: commonKnownBlocks,
  },

  // Block Kit components
  Section: {
    attrs: blockCommonAttrs,
    children: [
      'Field',
      'Image',
      'Mrkdwn',
      'img',
      ...blockInteractiveComponents,
      ...markupHTML,
    ],
  },
  section: {
    attrs: { id: null },
    children: [
      'Field',
      'Image',
      'Mrkdwn',
      'img',
      ...blockInteractiveComponents,
      ...markupHTML,
    ],
  },
  Field: { attrs: {}, children: ['Mrkdwn', ...markupHTML] },
  Divider: { attrs: blockCommonAttrs, children: [] },
  hr: { attrs: { id: null }, children: [] },
  Image: {
    attrs: { src: null, alt: null, title: null, ...blockCommonAttrs },
    children: [],
  },
  img: {
    attrs: { src: null, alt: null, title: null, id: null },
    children: [],
  },
  Actions: { attrs: blockCommonAttrs, children: blockInteractiveComponents },
  Context: {
    attrs: blockCommonAttrs,
    children: ['Image', 'Mrkdwn', 'img', 'span', ...markupHTML],
  },
  Header: { attrs: blockCommonAttrs, children: ['br'] },
  header: { id: null, children: ['br'] },
  Video: { attrs: videoComponentAttrs, children: [] },
  video: { attrs: videoIntrinsicAttrs, children: [] },
  File: {
    attrs: { externalId: null, source: ['remote'], ...blockCommonAttrs },
    children: [],
  },
  Call: {
    attrs: { callId: null, ...blockCommonAttrs },
    children: [],
  },

  Input: {
    attrs: {
      ...inputComponentAttrs,
      name: null,
      actionId: null,
      type: ['text', 'url', 'email', 'number', 'hidden', 'submit'],
      placeholder: null,
      value: null,
      maxLength: null,
      minLength: null,
      autoFocus: [],
      dispatchAction: ['onCharacterEntered', 'onEnterPressed'],

      // <Input type="number" />
      decimal: [],
      min: null,
      max: null,
    },
    children: [
      'Select',
      'ExternalSelect',
      'UsersSelect',
      'ConversationsSelect',
      'ChannelsSelect',
      'DatePicker',
      'TimePicker',
      'DateTimePicker',
      'RadioButtonGroup',
      'CheckboxGroup',
    ],
  },
  input: {
    attrs: {
      ...inputIntrinsicAttrs,
      name: null,
      type: ['text', 'url', 'email', 'number', 'hidden', 'submit'],
      placeholder: null,
      value: null,
      maxLength: null,
      minLength: null,
      autofocus: [],
      dispatchAction: ['onCharacterEntered', 'onEnterPressed'],

      // <input type="number" />
      decimal: [],
      min: null,
      max: null,
    },
    children: [
      'Select',
      'ExternalSelect',
      'UsersSelect',
      'ConversationsSelect',
      'ChannelsSelect',
      'DatePicker',
      'TimePicker',
      'DateTimePicker',
      'RadioButtonGroup',
      'CheckboxGroup',
    ],
  },

  // Block elements
  Button: {
    attrs: {
      value: null,
      url: null,
      style: ['primary', 'danger'],
      accessibilityLabel: null,
      'aria-label': null,
      ...blockInteractiveCommonAttrs,
    },
    children: [],
  },
  button: {
    attrs: {
      value: null,
      url: null,
      style: ['primary', 'danger'],
      'aria-label': null,
      name: null,
      confirm: null,
    },
    children: [],
  },

  Select: {
    attrs: {
      placeholder: null,
      value: null,
      ...blockInteractiveCommonAttrs,
      autoFocus: [],
      ...multipleSelectAttrs,
      ...inputComponentAttrs,
    },
    children: ['Option', 'Optgroup', 'option', 'optgroup'],
  },
  select: {
    attrs: {
      placeholder: null,
      value: null,
      name: null,
      confirm: null,
      autofocus: [],
      ...multipleSelectAttrs,
      ...inputIntrinsicAttrs,
    },
    children: ['Option', 'Optgroup', 'option', 'optgroup'],
  },
  Option: {
    attrs: { value: null, selected: [], description: null },
    children: [],
  },
  option: {
    attrs: { value: null, selected: [], description: null },
    children: [],
  },
  Optgroup: { attrs: { label: null }, children: ['Option', 'option'] },
  optgroup: { attrs: { label: null }, children: ['Option', 'option'] },

  ExternalSelect: {
    attrs: {
      placeholder: null,
      initialOption: null,
      value: null,
      minQueryLength: null,
      ...blockInteractiveCommonAttrs,
      autoFocus: [],
      ...multipleSelectAttrs,
      ...inputComponentAttrs,
    },
    children: [],
  },
  SelectFragment: {
    attrs: {},
    children: ['Option', 'Optgroup', 'option', 'optgroup'],
  },

  UsersSelect: {
    attrs: {
      placeholder: null,
      initialUser: null,
      value: null,
      ...blockInteractiveCommonAttrs,
      autoFocus: [],
      ...multipleSelectAttrs,
      ...inputComponentAttrs,
    },
    children: [],
  },
  ConversationsSelect: {
    attrs: {
      placeholder: null,
      initialConversation: ['current'],
      value: ['current'],
      include: ['im', 'mpim', 'private', 'public'],
      excludeBotUsers: [],
      excludeExternalSharedChannels: [],
      ...blockInteractiveCommonAttrs,
      autoFocus: [],
      ...multipleSelectAttrs,
      ...inputComponentAttrs,
      responseUrlEnabled: [],
    },
    children: [],
  },
  ChannelsSelect: {
    attrs: {
      placeholder: null,
      initialChannel: null,
      value: null,
      ...blockInteractiveCommonAttrs,
      autoFocus: [],
      ...multipleSelectAttrs,
      ...inputComponentAttrs,
      responseUrlEnabled: [],
    },
    children: [],
  },
  Overflow: { attrs: blockInteractiveCommonAttrs, children: ['OverflowItem'] },
  OverflowItem: { attrs: { value: null, url: null }, children: [] },
  DatePicker: {
    attrs: {
      placeholder: null,
      initialDate: null,
      value: null,
      ...blockInteractiveCommonAttrs,
      autoFocus: [],
      ...inputComponentAttrs,
    },
    children: [],
  },
  TimePicker: {
    attrs: {
      placeholder: null,
      initialTime: null,
      value: null,
      ...blockInteractiveCommonAttrs,
      autoFocus: [],
      ...inputComponentAttrs,
    },
    children: [],
  },
  DateTimePicker: {
    attrs: {
      initialDateTime: null,
      value: null,
      ...blockInteractiveCommonAttrs,
      autoFocus: [],
      ...inputComponentAttrs,
    },
    children: [],
  },
  RadioButtonGroup: {
    attrs: {
      value: null,
      ...blockInteractiveCommonAttrs,
      autoFocus: [],
      ...inputComponentAttrs,
    },
    children: ['RadioButton'],
  },
  RadioButton: {
    attrs: { value: null, checked: [], description: null },
    children: ['Mrkdwn', 'small', ...markupHTML.filter((tag) => tag !== 'a')],
  },
  CheckboxGroup: {
    attrs: {
      values: null,
      ...blockInteractiveCommonAttrs,
      autoFocus: [],
      ...inputComponentAttrs,
    },
    children: ['Checkbox'],
  },
  Checkbox: {
    attrs: { value: null, checked: [], description: null },
    children: ['Mrkdwn', 'small', ...markupHTML.filter((tag) => tag !== 'a')],
  },

  // Composition objects
  Confirm: {
    attrs: {
      title: null,
      confirm: null,
      deny: null,
      style: ['primary', 'danger'],
    },
    children: ['Mrkdwn', ...markupHTML],
  },
  Mrkdwn: {
    attrs: { raw: [], verbatim: [] },
    children: markupHTML,
  },

  // Input components
  Textarea: {
    attrs: {
      ...inputComponentAttrs,
      name: null,
      actionId: null,
      placeholder: null,
      value: null,
      maxLength: null,
      minLength: null,
      dispatchAction: ['onCharacterEntered', 'onEnterPressed'],
      autoFocus: [],
    },
    children: [],
  },
  textarea: {
    attrs: {
      ...inputIntrinsicAttrs,
      name: null,
      placeholder: null,
      value: null,
      maxLength: null,
      minLength: null,
      dispatchAction: ['onCharacterEntered', 'onEnterPressed'],
      autofocus: [],
    },
    children: [],
  },

  // Built-in component
  Escape: { attrs: {}, children: markupHTML },

  // HTML elements
  a: { attrs: { href: null }, children: markupHTML.filter((t) => t !== 'a') },
  b: {
    attrs: {},
    children: markupHTML.filter((t) => t !== 'b' && t !== 'strong'),
  },
  blockquote: {
    attrs: {},
    children: markupHTML.filter((t) => t !== 'blockquote'),
  },
  br: { attrs: {}, children: [] },
  code: { attrs: {}, children: [] },
  del: {
    attrs: {},
    children: markupHTML.filter(
      (t) => t !== 's' && t !== 'strike' && t !== 'del'
    ),
  },
  em: {
    attrs: {},
    children: markupHTML.filter((t) => t !== 'i' && t !== 'em'),
  },
  i: { attrs: {}, children: markupHTML.filter((t) => t !== 'i' && t !== 'em') },
  li: {
    attrs: { value: null },
    children: markupHTML.filter((t) => t !== 'ul' && t !== 'ol' && t !== 'li'),
  },
  ol: {
    attrs: { start: null, type: ['1', 'a', 'A', 'i', 'I'] },
    children: ['li'],
  },
  p: { attrs: {}, children: markupHTML.filter((t) => t !== 'p') },
  pre: { attrs: {}, children: [] },
  s: {
    attrs: {},
    children: markupHTML.filter(
      (t) => t !== 's' && t !== 'strike' && t !== 'del'
    ),
  },
  small: { attrs: {}, children: markupHTML.filter((tag) => tag !== 'a') },
  span: { attrs: {}, children: markupHTML },
  strike: {
    attrs: {},
    children: markupHTML.filter(
      (t) => t !== 's' && t !== 'strike' && t !== 'del'
    ),
  },
  strong: {
    attrs: {},
    children: markupHTML.filter((t) => t !== 'b' && t !== 'strong'),
  },
  time: {
    attrs: { dateTime: null, datetime: null, fallback: null },
    children: [],
  },
  ul: { attrs: {}, children: ['li'] },
}

export default schema
