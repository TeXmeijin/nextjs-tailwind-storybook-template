import type { FC } from 'react';
import Downshift from "downshift";

type Props = {

}

const items = [{name: 'test', id: 1}]
const itemToString = ((item: {name: string} | null) => item ? item.name : '')

export const AutoCompleteSelect: FC<Props> = () => {
  return (
    <Downshift
      onChange={(selection) =>
        alert(
          selection
            ? `You selected ${(itemToString)(selection)}`
            : 'selection cleared',
        )
      }
      itemToString={itemToString}
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
          <label {...getLabelProps()}>Find a Star Wars character</label>
          <div className={'absolute w-full'}>
            <input
              className={'p-1 p-2 rounded border w-full block'}
              {...getInputProps({
                isOpen,
                placeholder: 'Enter a name',
              })}
            />
          </div>
          <div className={'relative'}>
            <ul className={'absolute mt-0 p-0 w-full max-h-60 overflow-y-auto overflow-x-hidden outline-0 rounded shadow border-primary-100 border'} {...getMenuProps({open: isOpen})}>
              {isOpen
                ? items.map((item, index) => (
                  <div
                    key={item.id}
                    {...getItemProps({
                      item,
                      index,
                      // isActive: highlightedIndex === index,
                      isSelected: selectedItem === item,
                    })}
                  >
                    {(itemToString)(item)}
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
