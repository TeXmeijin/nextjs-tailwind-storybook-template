import Downshift from "downshift";
import clsx from "clsx";
import {Input} from "@/components/ui/forms/Input";

type Props<T extends {id: number|string} & Record<string, any>> = {
  items: T[],
  itemToString: (arg: T) => string
  placeholder: string
  label?: string
  onChange?: (arg: T | null) => void
  customItemComponent?: (props: {item: T}) => JSX.Element
}

type Component = {
  <T extends {id: number|string} & Record<string, any>>(props: Props<T>): JSX.Element
}
type ArrayItem<T> = T extends Array<infer U> ? U : never

export const AutoCompleteSelect: Component = ({items, itemToString, placeholder, label, onChange, customItemComponent}) => {
  return (
    <Downshift<ArrayItem<typeof items>>
      onChange={onChange}
      itemToString={((item) => item ? itemToString(item) : '')}
    >
      {({
          getLabelProps,
          getInputProps,
          getToggleButtonProps,
          getMenuProps,
          getItemProps,
          isOpen,
          clearSelection,
          selectedItem,
          inputValue,
          highlightedIndex,
        }) => (
        <div>
          {
            label && <label {...getLabelProps()}>{label}</label>
          }
          <div className={'relative w-full'}>
            <Input
              {...getInputProps({
                isOpen,
                placeholder,
              })}
            />
          </div>
          <div className={'relative'}>
            <ul className={
              clsx('absolute mt-0 p-0 w-full max-h-60 overflow-y-auto overflow-x-hidden outline-0 rounded shadow', isOpen && 'border-gray-border border')
            } {...getMenuProps({open: isOpen})}>
              {isOpen
                ? items.map((item, index) => (
                  <div
                    key={item.id}
                    className={'py-1 px-2'}
                    {...getItemProps({
                      item,
                      index,
                      // isActive: highlightedIndex === index,
                      isSelected: selectedItem === item,
                    })}
                  >
                    {customItemComponent ? customItemComponent({item}) : (itemToString)(item)}
                  </div>
                ))
                : null}
            </ul>
          </div>
        </div>
      )}
    </Downshift>
  )
}
