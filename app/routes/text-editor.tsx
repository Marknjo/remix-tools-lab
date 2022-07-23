import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { useRef } from 'react';
import styles from '~/styles/text-editor-styles.css';

export const meta: MetaFunction = () => ({
  title: 'Text Editor',
});

export const links: LinksFunction = () => [
  {
    // <!--Bootstrap Cdn -->
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
    integrity:
      'sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2',
    crossOrigin: 'anonymous',
  },
  {
    // <!-- fontAwesome cdn For Icons -->
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css',
    integrity:
      'sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==',
    crossOrigin: 'anonymous',
  },
  {
    // <!-- fontAwesome cdn For Icons -->
    rel: 'stylesheet',
    href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
    integrity:
      'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: styles,
  },
];

interface ActionButtonProps extends ActionButtonAttributes {
  onClick: (handler: ActionKeys) => void;
}

interface ActionButtonAttributes {
  text?: string;
  title: string;
  hasIcon: boolean;
  icon?: string;
  className: string;
  handler: ActionKeys;
}

enum ActionKeys {
  F1 = 'f1',
  F2 = 'f2',
  F3 = 'f3',
  F4 = 'f4',
  F5 = 'f5',
  F6 = 'f6',
  F7 = 'f7',
  F8 = 'f8',
  F9 = 'f9',
  F10 = 'f10',
}

interface ActionButtonData extends ActionButtonAttributes {
  handler: ActionKeys;
}

// const actionButtonsData: ActionButtonData[] = [
const actionButtonsData: ActionButtonAttributes[] = [
  {
    hasIcon: false,
    text: 'Bold',
    title: 'Bold this Text',
    className: 'secondary',
    handler: ActionKeys.F1,
  },

  {
    hasIcon: false,
    text: 'Italic',
    title: 'Italic Text',
    className: 'success',
    handler: ActionKeys.F2,
  },

  {
    hasIcon: true,
    icon: 'align-left',
    title: 'Left Align',
    className: 'primary',
    handler: ActionKeys.F3,
  },

  {
    hasIcon: true,
    icon: 'align-center',
    title: 'Center Align',
    className: 'secondary',
    handler: ActionKeys.F4,
  },

  {
    hasIcon: true,
    icon: 'align-right',
    title: 'Right Align',
    className: 'primary',
    handler: ActionKeys.F5,
  },

  {
    hasIcon: false,
    text: 'Upper Case',
    title: 'Uppercase Text',
    className: 'secondary',
    handler: ActionKeys.F6,
  },

  {
    hasIcon: false,
    text: 'Lower Case',
    title: 'Lowercase Text',
    className: 'primary',
    handler: ActionKeys.F7,
  },

  {
    hasIcon: false,
    text: 'Capitalize',
    title: 'Capitalize Text',
    className: 'primary',
    handler: ActionKeys.F8,
  },

  {
    hasIcon: false,
    text: 'Clear Text',
    title: 'Tooltip on top',
    className: 'primary side',
    handler: ActionKeys.F9,
  },
];

export default function TextEditor() {
  const actionButtonHandler = (actionKey: ActionKeys) => {
    switch (actionKey) {
      case ActionKeys.F1:
        console.log('Key 1: ', actionKey);
        break;

      case ActionKeys.F2:
        console.log('Key 2: ', actionKey);
        break;

      case ActionKeys.F3:
        console.log('Key 3: ', actionKey);
        break;

      case ActionKeys.F4:
        console.log('Key 4: ', actionKey);
        break;

      case ActionKeys.F5:
        console.log('Key 5: ', actionKey);
        break;

      case ActionKeys.F6:
        console.log('Key 6: ', actionKey);
        break;

      case ActionKeys.F7:
        console.log('Key 7: ', actionKey);
        break;

      case ActionKeys.F8:
        console.log('Key 8: ', actionKey);
        break;

      case ActionKeys.F9:
        console.log('Key 9: ', actionKey);
        break;
    }
  };

  return (
    <div>
      <main>
        <section>
          <h1 className="shadow-sm">TEXT EDITOR</h1>

          <div className="flex-box">
            <div className="row">
              <div className="col">
                {actionButtonsData.map(action => (
                  <ActionButton
                    key={action.handler}
                    onClick={actionButtonHandler}
                    handler={action.handler}
                    hasIcon={action.hasIcon}
                    title={action.title}
                    text={action.text && action.text}
                    icon={action.icon && action.icon}
                    className={action.className}
                  />
                ))}
              </div>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-md3 col-sm-3"></div>

            <div className="col-md-6 col-sm-9">
              <div className="flex-box">
                <textarea
                  name="name"
                  id="textarea1"
                  cols={100}
                  rows={15}
                  className="input shadow"
                  placeholder="Your text here "
                ></textarea>
              </div>
            </div>

            <div className="col-md-3"></div>
          </div>
        </section>

        <br />
        <br />
      </main>
      <footer>
        <h6 style={{ textAlign: 'center' }}>
          <sup>&copy;</sup>
          <small>Copyright: </small>
          Mark Njoroge {new Date(Date.now()).getFullYear()}
          {'  | '}
          <Link
            to="/"
            className="text-lime-500 font-semibold transition-all border-b-4 border-transparent hover:border-lime-500  py-1 px-2"
          >
            Home
          </Link>
        </h6>
      </footer>
    </div>
  );
}

function ActionButton({
  onClick,
  text,
  icon,
  hasIcon,
  title,
  className,
  handler,
}: ActionButtonProps) {
  const actionRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    onClick(handler);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`shadow-sm btn btn-outline-${className} `}
      data-toggle="tooltip"
      data-placement="top"
      title={title}
      ref={actionRef}
    >
      {text && text} {hasIcon && <i className={`fas fa-${icon}`}></i>}
    </button>
  );
}
