import { useEffect, useState } from 'react';
import { Container, MapContainer } from './style';
import useCompanyMap from '../../hooks/useCompanyMap';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import CardMap from '../../components/CardMap';

export default function Map() {
  const navigate = useNavigate();
  const { companyMap } = useCompanyMap();
  const address =
    companyMap.logradouro +
    ', ' +
    companyMap.numero +
    ', ' +
    companyMap.complemento +
    ', ' +
    companyMap.bairro +
    ', ' +
    companyMap.municipio +
    ', ' +
    companyMap.uf +
    ', ' +
    companyMap.cep;

  useEffect(() => {
    if (companyMap.length === 0) {
      navigate('/list');
    }
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: address }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK) {
        const mapOptions = {
          zoom: 15,
          center: results[0].geometry.location,
        };
        const map = new window.google.maps.Map(
          document.getElementById('map'),
          mapOptions
        );
        new window.google.maps.Marker({
          position: results[0].geometry.location,
          map: map,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Endereço não encontrado',
        });
        console.log(status);
      }
    });
  }, [companyMap]);

  return (
    <Container>
      <CardMap company={companyMap} />
      <MapContainer id="map" />
    </Container>
  );
}
