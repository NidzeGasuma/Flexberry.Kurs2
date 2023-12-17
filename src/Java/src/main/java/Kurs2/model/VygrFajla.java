package Kurs2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kurs2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ВыгрФайла
 */
@Entity(name = "IISKurs2ВыгрФайла")
@Table(schema = "public", name = "ВыгрФайла")
public class VygrFajla {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ИмяФайла")
    private String имяфайла;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Konvert")
    @Convert("Konvert")
    @Column(name = "Конверт", length = 16, unique = true, nullable = false)
    private UUID _konvertid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Konvert", insertable = false, updatable = false)
    private Konvert konvert;


    public VygrFajla() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИмяФайла() {
      return имяфайла;
    }

    public void setИмяФайла(String имяфайла) {
      this.имяфайла = имяфайла;
    }


}