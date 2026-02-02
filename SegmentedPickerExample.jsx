import { useState } from "react";
import { Host, Picker, Text } from "@expo/ui/swift-ui";
import { pickerStyle, tag } from "@expo/ui/swift-ui/modifiers";

const options = ["Apple", "Banana", "Orange"];

export default function SegmentedPickerExample() {
  const [selectedTag, setSelectedTag] = useState(options[0]);

  return (
    <Host matchContents>
      <Picker
        modifiers={[pickerStyle("segmented")]}
        label="Select a fruit"
        selection={selectedTag}
        onSelectionChange={(selection) => {
          setSelectedTag(selection);
        }}
      >
        {options.map((option) => (
          <Text key={option} modifiers={[tag(option)]}>
            {option}
          </Text>
        ))}
      </Picker>
    </Host>
  );
}
