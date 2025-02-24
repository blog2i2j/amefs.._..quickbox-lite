// SPDX-License-Identifier: GPL-3.0-or-later

import Constant from "../constant";
import { Socket } from "socket.io";
import i18n from "../i18n";

export default (client: Socket, next?: (err?: Error) => void) => {
    client.on(Constant.EVENT_I18N, (locale) => {
        console.log(`${client.id} set lang as ${locale}`);
        i18n.locale = locale as string;
    });
    if (next) {
        next();
    }
};
