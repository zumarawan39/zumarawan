'use client';
import React from 'react';
import Styles from './input.module.scss';
import { BiInfoCircle } from 'react-icons/bi';
// import { InputProps } from '@utils/types';
import dynamic from 'next/dynamic';
import { Controller } from 'react-hook-form';

// const PhoneInput = dynamic(() => import('@ui/components/InputPhoneWrapper/InputPhoneWrapper'), {
//   ssr: false,
// });
import 'react-phone-input-2/lib/style.css';

// import parsePhoneNumber, {
//   CountryCode,
//   isPossiblePhoneNumber,
//   isValidPhoneNumber,
//   validatePhoneNumberLength,
// } from 'libphonenumber-js/max';
const Input: React.FC<any> = ({
  name = '',
  validationSchema = {},
  label = '',
  placeHolder = '',
  type = 'text',
  error = false,
  errorMessage = null,
  register,
  control,
  flex = 'flex-col',
  bottomElement = '',
  bottomElementClass = '',
  bottomElementCss = {},
  innerElement = '',
  innerElementCss = {},
  autoComplete = 'off',
  isTextArea = false,
  maxLength = 200,
  ...props
}) => {
  const [isPhoneNumberValid, setIsPhoneNumberValid] = React.useState(false);
  const [isPhoneNumberTouched, setIsPhoneNumberTouched] = React.useState(false);
  // const validateMobileNumber = (number: string, countryCode: string) => {
  //   try {
  //     const phoneNumber = parsePhoneNumber(number, countryCode.toUpperCase());
  //     if (!phoneNumber || !phoneNumber?.isValid() || phoneNumber.getType() !== 'MOBILE') {
  //       return false;
  //     }
  //     return true;
  //   } catch (error) {
  //     return false;
  //   }
  // };
  return (
    <div className={`${Styles.inputWrapper} flex ${flex} w-full`}>
      {label && <label className={`mb-2.5 ${Styles.label}`}>{label}</label>}
      {type !== 'phone_number' ? (
        <div className={Styles.inputFieldContainer}>
          {!isTextArea ? (
            <input
              id={name}
              name={name}
              type={type}
              autoComplete={autoComplete}
              placeholder={placeHolder}
              className={`${error && 'validation-error'} ${Styles.inputField}`}
              maxLength={maxLength}
              {...register(name, validationSchema)}
              {...props}
            />
          ) : (
            <textarea
              className={`${error && 'validation-error'} ${Styles.inputField}`}
              {...register(name, validationSchema)}
              maxLength={maxLength}
              rows={3}
              {...props}
            ></textarea>
          )}
          {error && errorMessage && (
            <small className={`text-red ${Styles.error}`}>
              <BiInfoCircle /> {errorMessage}
            </small>
          )}
          <div
            className={`${Styles.bottomElement} ${bottomElementClass && bottomElementClass}`}
            style={bottomElementCss}
          >
            {bottomElement}
          </div>
          {innerElement && (
            <div className={Styles.innerElement} style={innerElementCss}>
              {innerElement}
            </div>
          )}
        </div>
      ) : (
        <div className={Styles.inputFieldContainer}>
          <Controller
            control={control}
            name={name}
            rules={validationSchema}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <>
                <input
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Enter phone number"
                  className={`${(!error && isPhoneNumberTouched && isPhoneNumberValid) || error ? 'validation-error !outline !outline-1 !outline-danger' : ''} ${Styles.phoneInputField}`}
                  maxLength={15}
                  onBlur={() => { field.onBlur(); }}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Removed validateMobileNumber usage
                    field.onChange(value);
                  }}
                  value={field.value}
                  disabled={props.disabled}
                  name={name}
                />
                {error && (
                  <small className={`text-red ${Styles.error}`}>
                    <BiInfoCircle /> {error.message}
                  </small>
                )}

                {/* {!error && isPhoneNumberTouched && isPhoneNumberValid && (
                    <small className={`text-red ${Styles.error}`}>
                      <BiInfoCircle />{' '}
                      {t('validation_errors.phone_number_invalid')}
                    </small>
                  )} */}
              </>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
