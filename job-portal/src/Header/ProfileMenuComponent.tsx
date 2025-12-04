import { Menu, Avatar, Switch, rem } from '@mantine/core';
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconLogout2,
} from '@tabler/icons-react';
import AvatarLogo from "/JobPortalResources/avatar.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileMenuComponent = () => {
  const [dark, setDark] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="flex cursor-pointer items-center gap-2">
          <div>
            Ankur
          </div>
          <Avatar src={AvatarLogo} alt="it's me" />
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
        <Link to="/profile">
          <Menu.Item leftSection={<IconUserCircle size={14} />}>
            Profile
          </Menu.Item>
        </Link>

        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon size={14} />}
          rightSection={
            <Switch checked={dark} onChange={(event) => setDark(event.currentTarget.checked)} size='md' color='dark.4' onLabel={<IconSun
              style={{ width: rem(16), height: rem(16) }} stroke={2.5} color='yellow' />} offLabel={<IconMoon style={{ width: rem(16), height: rem(16) }} stroke={2.5} color='cyan' />} />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<IconLogout2 size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenuComponent