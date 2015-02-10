// Trace.js - PointLight.ts

/// <reference path="./../World/World.ts" />
/// <reference path="Point3D.ts" />
/// <reference path="Vector3D.ts" />
/// <reference path="Ray.ts" />
/// <reference path="Normal.ts" />
/// <reference path="ShadeRec.ts" />
/// <reference path="Light.ts" />

module Tracejs {
    export class PointLight extends Light{
      ls       : number;
      color    : RGBColor;
      location : Vector3D;

      constructor(shadow ?: boolean, l_s ?: number, 
                  col ?: RGBColor, loc ?: Vector3D){
        if(shadow) super(shadow);
        else       super(false);
        if(l_s) this.ls = l_s;
        else    this.ls = 1.0;
        if(col) this.color = col;
        else    this.color = new RGBColor(0,0,0);
        if(loc) this.location = loc;
        else    this.location = new Vector3D(0.0, 0.0, 0.0);
      }
    
      set_ls(l_s : number) : void{
        this.ls = l_s;
      }
    
      set_color(col : RGBColor) : void{
        this.color = col;
      }
  
      set_location(loc : Vector3D) : void{
        this.location = loc;
      }

      get_ls() : number{
        return this.ls;
      }

      get_color() : RGBColor{
        return this.color;
      }
   
      get_location() : Vector3D{
        return this.location;
      }
      
      get_direction(sr : ShadeRec) : Vector3D{
        var point = sr.get_hit_point();
        var hit = new Tracejs.Vector3D(point.get_x(),
                                       point.get_y(),
                                       point.get_z());
        return (this.location).sub(hit);
      }
      
      incident_radiance(sr : ShadeRec) : RGBColor{
        return (this.color).scale(this.ls);
      }
    }
}
