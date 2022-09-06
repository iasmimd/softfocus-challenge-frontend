import { Container } from './style';
import PinFile from '../../assets/pinfile.svg';
import ModalUpdate from '../Modal';
import { useState } from 'react';

interface RegistrationResponse {
  id: string;
  farmer_name: string;
  farmer_email: string;
  latitude: number;
  longitude: number;
  tillage_type: string;
  cause: string;
  is_duplicate_registration: boolean;
  last_modified?: Date;
  onClick: () => any;
}

const RegistrationCard = ({
  farmer_name,
  farmer_email,
  latitude,
  longitude,
  tillage_type,
  cause,
  is_duplicate_registration,
  last_modified,
  onClick,
}: RegistrationResponse) => {
  const formatedDate = last_modified?.toString().split('-').reverse().join('/');

  return (
    <>
      <Container onClick={onClick}>
        <img src={PinFile} />
        <section>
          <span className='farmer-name'>{farmer_name}</span>
          <span>{farmer_email}</span>
          <span>
            <b>Latitude:</b> {latitude}
          </span>
          <span>
            <b>Longitude:</b> {longitude}
          </span>
          <span>
            <b>Lavoura:</b> {tillage_type}
          </span>
          <span>
            <b>Causa:</b> {cause}
          </span>
          {is_duplicate_registration ? (
            <span className='atention-span'>
              <b>Suspeita de fraude</b>
            </span>
          ) : (
            <></>
          )}
          <span>
            <b>Última modificação:</b> {formatedDate}
          </span>
        </section>
      </Container>
    </>
  );
};

export default RegistrationCard;
