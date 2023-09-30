import { Button, useMantineColorScheme } from '@mantine/core';

const ColorSchemeSwitch = () => {

    const { setColorScheme, clearColorScheme, colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Button onClick={() => toggleColorScheme()}>Test</Button>
    )
}

export default ColorSchemeSwitch