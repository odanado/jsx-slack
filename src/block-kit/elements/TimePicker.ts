import { InputBlock, Timepicker } from '@slack/types'
import { BuiltInComponent, createComponent } from '../../jsx-internals'
import { ConfirmableProps } from '../composition/Confirm'
import { plainText } from '../composition/utils'
import { InputComponentProps, wrapInInput } from '../layout/Input'
import { ActionProps, AutoFocusibleProps, focusOnLoadFromProps } from './utils'

interface TimePickerBaseProps
  extends ActionProps,
    AutoFocusibleProps,
    ConfirmableProps {
  children?: never

  /** The placeholder text shown in empty time picker field. */
  placeholder?: string

  /**
   * An initially selected time.
   *
   * It accepts `HH:mm` formatted string, and a value that points out designated
   * datetime: UNIX timestamp _in millisecond_ or JavaScript `Date` instance.
   */
  initialTime?: string | number | Date

  /** An alias into `initialTime` prop. */
  value?: string | number | Date
}

type TimepickerElement = Timepicker

export type TimePickerProps = InputComponentProps<TimePickerBaseProps>

/**
 * The interactive component or input component for
 * [the `timepicker` block element](https://api.slack.com/reference/block-kit/block-elements#timepicker).
 *
 * It makes easy to select the specific time through a dropdown or a native
 * interface suited to the device.
 *
 * @example
 * ```jsx
 * <Blocks>
 *   <Actions>
 *     <TimePicker actionId="time_picker" initialTime="12:34" />
 *   </Actions>
 * </Blocks>
 * ```
 *
 * @return The partial JSON of a block element for time picker, or `input`
 *   layout block with it
 */
export const TimePicker: BuiltInComponent<TimePickerProps> = createComponent<
  TimePickerProps,
  TimepickerElement | InputBlock
>('TimePicker', (props) => {
  const time: string | undefined = ((initialTime) => {
    if (initialTime !== undefined) {
      if (typeof initialTime === 'string') return initialTime

      try {
        const dateInstance = new Date(initialTime)

        return [
          `${dateInstance.getHours()}`.padStart(2, '0'),
          `${dateInstance.getMinutes()}`.padStart(2, '0'),
        ].join(':')
      } catch (e) {
        // Ignore
      }
    }
    return undefined
  })(props.initialTime || props.value)

  return wrapInInput<TimepickerElement>(
    {
      type: 'timepicker',
      action_id: props.actionId || props.name,
      placeholder:
        props.placeholder !== undefined
          ? plainText(props.placeholder)
          : undefined,
      initial_time: time,
      confirm: props.confirm as any,
      focus_on_load: focusOnLoadFromProps(props),
    },
    props,
    TimePicker
  )
})
