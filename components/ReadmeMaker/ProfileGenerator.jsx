import React, { useState } from 'react';

// Components
import ProfileElements from './ProfileElements';
import ProfileCustomization from './ProfileCustomization';
import ProfilePreview from './ProfilePreview';

function ProfileGenerator() {
  const [selectedElement, setSelectedElement] = useState(null);
  const [customizationData, setCustomizationData] = useState({});

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Sol taraf: Eleman seçimi */}
      <div className="col-span-3 bg-fourth dark:bg-primary p-4">
        <ProfileElements 
          setSelectedElement={setSelectedElement} 
        />
      </div>

      {/* Orta kısım: Render edilmiş önizleme */}
      <div className="col-span-6 bg-white dark:bg-secondary p-4">
        <ProfilePreview customizationData={customizationData} />
      </div>

      {/* Sağ taraf: Seçilen elemanın özelleştirilmesi */}
      <div className="col-span-3 bg-fourth dark:bg-primary p-4">
        {selectedElement && (
          <ProfileCustomization
            selectedElement={selectedElement}
            setCustomizationData={setCustomizationData}
            customizationData={customizationData}
          />
        )}
      </div>
    </div>
  );
}

export default ProfileGenerator;
