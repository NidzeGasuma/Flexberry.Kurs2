package Kurs2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kurs2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗагрФайла
 */
@Entity(name = "IISKurs2ЗагрФайла")
@Table(schema = "public", name = "ЗагрФайла")
public class ZagrFajla {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ПутьФайла")
    private String путьфайла;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EksFajly")
    @Convert("EksFajly")
    @Column(name = "ЭксФайлы", length = 16, unique = true, nullable = false)
    private UUID _eksfajlyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EksFajly", insertable = false, updatable = false)
    private EksFajly eksfajly;


    public ZagrFajla() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПутьФайла() {
      return путьфайла;
    }

    public void setПутьФайла(String путьфайла) {
      this.путьфайла = путьфайла;
    }


}