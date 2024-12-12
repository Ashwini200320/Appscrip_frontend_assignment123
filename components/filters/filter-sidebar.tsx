"use client";

import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export function FilterSidebar() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        
        <Accordion type="single" collapsible>
          <Accordion.Item value="category">
            <Accordion.Trigger>Category</Accordion.Trigger>
            <Accordion.Content>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="men" />
                  <label htmlFor="men" className="ml-2">Men's Clothing</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="women" />
                  <label htmlFor="women" className="ml-2">Women's Clothing</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="jewelry" />
                  <label htmlFor="jewelry" className="ml-2">Jewelry</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="electronics" />
                  <label htmlFor="electronics" className="ml-2">Electronics</label>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          
          <Accordion.Item value="price">
            <Accordion.Trigger>Price Range</Accordion.Trigger>
            <Accordion.Content>
              <div className="px-2">
                <Slider
                  defaultValue={[0, 1000]}
                  max={1000}
                  step={1}
                  className="mt-6"
                />
                <div className="flex justify-between mt-2">
                  <span>$0</span>
                  <span>$1000</span>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}