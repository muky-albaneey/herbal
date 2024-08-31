import React from 'react';
import { TERipple } from 'tw-elements-react';
import { useTranslation } from 'react-i18next';

export default function SearchWithButtonExample(): JSX.Element {
    const { t } = useTranslation();
    // const { setToken, lang_token } = useAuthStore();
    const { i18n } = useTranslation();

    return (
            <div className="mb-3 md:w-96 mx-auto w-196">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                        type="search"
                        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-green-900 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder={t('search_placeholder')}
                        aria-label="Search"
                        aria-describedby="button-addon3" />

                    <TERipple>
                    <button
                        className="relative z-[2] rounded-r border-2 border-green-700 px-5 py-2 text-xs font-medium uppercase text-white-700 transition duration-150 ease-in-out hover:bg-green-900 hover:green-opacity-3 focus:outline-none focus:ring-0"
                        type="button"
                        id="button-addon3">
                        {t('search')}
                    </button>
                    </TERipple>
                </div>
            </div>
    );
}