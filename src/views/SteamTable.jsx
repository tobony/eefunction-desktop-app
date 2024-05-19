// component example
import { Text, Anchor, Space, Button, Title, TextInput } from '@mantine/core';
import { Trans, useTranslation } from 'react-i18next';

import * as fs from '@tauri-apps/api/fs';
import * as shell from '@tauri-apps/api/shell';
import { invoke } from '@tauri-apps/api/tauri'

import { notifications } from '@mantine/notifications';
import { APP_NAME, RUNNING_IN_TAURI, useMinWidth, useTauriContext } from '../tauri/TauriProvider';
import { appWindow } from '@tauri-apps/api/window'
import { createStorage } from '../tauri/storage';
import { notify } from '../common/utils';


function toggleFullscreen() {
    appWindow.isFullscreen().then(x => appWindow.setFullscreen(!x));
}

export default function SteamTable() {
    const { t } = useTranslation();
    const { fileSep, documents, downloads } = useTauriContext();
    // store-plugin will create necessary directories
    const storeName = `${documents}${APP_NAME}${fileSep}example_view.dat`;
    // const storeName = 'data.dat';
    const { use: useKVP, loading, data } = createStorage(storeName);
    const [exampleData, setExampleData] = useKVP('exampleKey', '');

    useMinWidth(600);

    // <> is an alias for <React.Fragment>
    return !loading && <>
        <Text>{t('Modern Desktop App Examples')}</Text>
        <Space h='lg' />
        <Space />
        <h3>my Home</h3>

        <table class="table table-borderless table-sm table-striped">
          <tr>
            <td>ddd</td>

          </tr>

        </table>

    </>
}
