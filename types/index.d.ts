import { PathProps } from '@react-leaflet/core';
import { LatLngExpression, Polyline as LeafletPolyline, TextPathOptions } from 'leaflet';
import 'leaflet-textpath';
import { PropsWithChildren } from 'react';
interface ReactLeafletTextPathBaseProps {
    /**
     * The text to display over the polyline.
     */
    text: string;
    /**
     * The positions to use for the polyline.
     */
    positions: LatLngExpression[];
}
export declare type ReactLeafletTextPathProps = TextPathOptions & PathProps & PropsWithChildren<ReactLeafletTextPathBaseProps>;
declare const ReactLeafletTextPath: import("react").ForwardRefExoticComponent<TextPathOptions & PathProps & ReactLeafletTextPathBaseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<LeafletPolyline<import("geojson").LineString | import("geojson").MultiLineString, any>>>;
export default ReactLeafletTextPath;
